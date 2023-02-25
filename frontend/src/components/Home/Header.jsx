import React, { useEffect } from 'react'
import axios from 'axios'


const Header = () => {

function getData(){
    axios({
        method: "GET",
        url: "/blog"
    }).then((response) => {
        const res = response.data
        console.log(res)
    })
}

useEffect(() => {
  
    getData()

})


return (

    <header>
        <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Welcome to the blog</h1>
            <h4 className="mb-3">All your juicy stories in one place</h4>
        </div>
    </header>
  );
};

export default Header