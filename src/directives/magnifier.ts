export default {
    mounted(el: HTMLElement) {
        const oImgWrap: HTMLElement = el,
            oMagWrap: HTMLElement = el.querySelector('.gulu-magnifierWrapper'),
            oMagImg: HTMLElement = el.querySelector('.gulu-magnifierImg'),
            oStaticImg: HTMLElement = el.querySelector('.gulu-magnifierStaticImg'),
            imgWidth = parseInt(window.getComputedStyle(oImgWrap, null)['width']),
            imgHeight = parseInt(window.getComputedStyle(oImgWrap, null)['height']),
            magWidth = parseInt(window.getComputedStyle(oMagWrap, null)['width']),
            magHeight = parseInt(window.getComputedStyle(oMagWrap, null)['height']),
            StaticImgWidth = parseInt(window.getComputedStyle(oStaticImg, null)['width']),
            StaticImgHeight = parseInt(window.getComputedStyle(oStaticImg, null)['height']),
            imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop
            
            const init = () => {
                bindEvent()
            }
            function bindEvent() {
                oImgWrap.addEventListener('mouseover', (e) => {
                    oMagImg.style.width =  StaticImgWidth + 'px';
                    oMagWrap.className += ' show'  //显示放大镜
                    const { x, y, mouseX, mouseY } = getXY(e)
                    showMag(x, y) //显示放大镜同时获得位置  
                    document.addEventListener('mouseover', handleMouseMove, false)
                })
                oImgWrap.addEventListener('mouseout', handleMouseOut,false)
            }
            function handleMouseMove(e) {
                const { x, y, mouseX, mouseY } = getXY(e)
                showMag(x, y, mouseX, mouseY)
            }
            function handleMouseOut(e){
                oMagWrap.className = 'gulu-magnifierWrapper'//隐藏放大镜
                document.removeEventListener('mousemove', handleMouseMove, false)
            }

            function showMag(x, y, mouseX?, mouseY?) {
                oMagWrap.style.left = x + 'px';
                oMagWrap.style.top = y + 'px';
                oMagImg.style.left = -x + 'px'; //图片与放大镜反方向移动
                oMagImg.style.top = -y + 'px'

                if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
                    oMagWrap.className = 'gulu-magnifierWrapper'  //隐藏放大镜
                    document.removeEventListener('mousemove', handleMouseMove, false) //解绑事件
                }
            }

            function getXY(e: MouseEvent) {
                return {
                    x: e.pageX - imgX - magWidth / 2, //获取鼠标相对于浏览器的位置
                    y: e.pageY - imgY - magHeight / 2,
                    mouseX: e.pageX - imgX, //鼠标距离图片边框的位置
                    mouseY: e.pageY - imgY
                }
            }
            init()
            document.removeEventListener('mouseout',handleMouseOut,false)
        
    }
}
