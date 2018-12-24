import axios from 'axios'

export const menu=() => {
const data = document.querySelector('.profile-content')
}

export const imgUpoad = (e) => {
    const cFile = e.target.files[0];
    const img = document.getElementById('profileImg')
    if(cFile === undefined ){
        alert('nothing file selected')
        return false;
    }
    else if (cFile  && cFile.size >= 10485760 ){
       alert('file selected is too larg please select another file ')
       e.target.value=''
      }else{
      const data = new FormData();
      const file = e.target.files[0]
      data.append('file', file)
      data.append('upload_preset',"wxhp02hu");
    axios.post('https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/momuzio/image/upload ',data,
    
      )
    // .then(res =>{this.setState({ img :res.data.secure_url })}).then(this.setState({ state : true}))
        .then(res =>{
            const url = res.data.secure_url
            console.log(url)
            img.src=url
            
            

        })
      

      .catch(err =>{console.log(err)})
    }
   
      
  }