export default {
    mounted(el: HTMLElement) {
        const oSelectorInput = el.querySelector('.gulu-selector-input'),
              oSelectorMenu = el.querySelector('.gulu-selector-menu')
        const oInput = oSelectorInput.querySelector('.input'),
              oPlaceHolder = oSelectorInput.querySelector('.placeholder'),
              oIconUse = oSelectorInput.querySelector('use')

        oInput.addEventListener('focus', function () {
            (oPlaceHolder as HTMLElement).style.display = 'none';
            oIconUse.setAttribute('xlink:href', '#icon-sousuo');
            (oSelectorMenu as HTMLElement).style.display = 'block'
        }, false)

        oInput.addEventListener('blur', function () {
            oIconUse.setAttribute('xlink:href', '#icon-xiajiantou');
            setTimeout(() => { //如果失去焦点立刻隐藏，那么Menu组件即刻销毁，就没办法向外传递值,所以设置延迟
                (oSelectorMenu as HTMLElement).style.display = 'none';        
                if (this.value.length === 0) {
                    (oPlaceHolder as HTMLElement).style.display = 'block';
                }
            }, 200)

        }, false)
    }
}