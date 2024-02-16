let routeHead = '';

function checkLocalUserInfo(){
    var username=window.localStorage.getItem('username');
    var password=window.localStorage.getItem('password')
    routeHead=`resource/${username}/`
    if (username!==null && password!==null){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',`http://127.0.0.1:5657/signin?username=${username}&password=${password}`,true);
        xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4&&xhr.status===200){
                console.log(xhr.responseText)
                if (xhr.responseText==='success'){
                    document.getElementById('user-id').innerHTML=`用户:${username}`
                }else {
                    openSigninWindow()
                }

            }
        }
        xhr.send()
    }else {
        openSigninWindow()
    }
}

function createToolColumnItem(props){
    const btn= document.createElement('button')
    btn.classList.add('tool-column-item')
    btn.innerHTML=props.text

    //
    return btn
}

function setToolColumnItem(){
    document.getElementById('tool-column').innerHTML=''

    var root={}
    root.newFile=createToolColumnItem({text:'上传文件'})
    root.newDir=createToolColumnItem({text: '新建文件夹'})
    root.selectMultiple=createToolColumnItem({text:'选择文件'})
    //console.log(root)
    Object.keys(root).forEach((item)=>{

        document.getElementById('tool-column').appendChild(root[item])
    })

}

function  createFileListAreaRow(props){
    const frame=document.createElement('FileListAreaRowFrame')
}

var dirCentered=[]

function setListAreaItem(){
    document.getElementById('list-area').innerHTML=''
    const xhr = new XMLHttpRequest();
    var route=routeHead
    if (dirCentered.length!==0){
        dirCentered.forEach(item=>{
            route+=`${item}/`
        })
    }
    xhr.open('GET',`http://127.0.0.1:5657/getdir?path=${route}`,true);
    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            console.log(xhr.responseText)


        }
    }
    xhr.send()

}