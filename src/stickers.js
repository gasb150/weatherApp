export default function stickers (data) {

    status = (data.weather[0].id)
    let  url = ''
    if (status <= 232){
        url = 'https://media3.giphy.com/media/SU3SbAI9XzlGNNudLK/giphy.gif'
    } else if ( status <= 321) {
        url = 'https://media1.giphy.com/media/MolmF9vdBIxgrDdmG8/giphy.gif?cid=29ff461b9t1x2e85s3k0kcem8hx5scc0zrj1ntin34zkeypw&rid=giphy.gif'
    } else if (status <= 531) {
        url = 'https://media3.giphy.com/media/hqrGXRB15iYRlLAZAF/giphy.gif?cid=29ff461b6h9k65smepryzx0um6vbhkorer9i1kj8u6l5ruve&rid=giphy.gif'
    } else if (status <= 622) {
        url = 'https://media4.giphy.com/media/Y9a12fdUgrAC6jkdlW/giphy.gif?cid=29ff461bv17ccopr32drwcn85bmtj2z633lwjl6hji9l0ufv&rid=giphy.gif' 
    } else if (status <= 781) { 
          url = 'https://media0.giphy.com/media/C8okPSDOWUydX9zQwC/giphy.gif'
    } else if (status === 800 ) {
        url = 'https://media0.giphy.com/media/MdupWSV50rFjrQQ4Eg/giphy.gif?cid=29ff461bsry8r4m80e2yi6yh5snk31hwshwh8unqaote21zi&rid=giphy.gif'
    }else if(status <= 802){
        url = 'https://media4.giphy.com/media/4F1WfRgILk85QUh19f/giphy_s.gif?cid=ecf05e47iip46r5bljo1afeju7sqm5u62fo4yczzq4fb2wfy&rid=giphy_s.gif'
    } else if (status <= 804) {
   url = 'https://media3.giphy.com/media/fqhdKisO8aPdXVZKH4/giphy.gif?cid=ecf05e47rn7efxu47wvcbds0u08a9id6uw1j8o2lu6pu87d3&rid=giphy.gif'
    }
   console.log(status)
   return url
}