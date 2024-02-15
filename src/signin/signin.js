function openSigninWindow(){
    const win=createPage({
        show:true,
        title:`登录`,
        disableClose:false
    })

    const flexFrame=document.createElement('flexFrame')
    const usernameInput=createInputItem({
        title:'用户名',
        placeholder:'请输入用户名',
        defaultValue:''
    })
    const passwordInput=createInputItem({
        title:'密码',
        placeholder:'请输入密码',
        defaultValue:''
    })
}

function createInputItem(props){
    const frame=document.createElement('InputItemFrame')
    const title=document.createElement('InputItemTitle')
    const input=document.createElement('input')
    input.classList.add('inputItemInput')

    frame.appendChild(title)
    frame.appendChild(input)

    title.innerHTML=props.title
    input.value=props.defaultValue
    input.setAttribute('placeholder',props.placeholder)

    try {
        frame.input=input
    }catch (error){
        console.log(error)
    }

    return frame
}