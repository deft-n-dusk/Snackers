import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                name : "Sonal Tyagi",
                bio : "Developer",
            }
        };
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/deft-n-dusk");
        const json = await data.json();

       

        this.setState({
            userInfo : json,
        })
    }


    render(){

    const {name, bio} = this.state.userInfo;
    


        return(

            <div className="flex justify-center items-center">
            <div className='w-64 h-5/6  rounded-xl ml-8 mt-8  p-6 leading-loose text-[#743a36]'>
            
            <img  src="https://avatars.githubusercontent.com/u/168233984?v=4" alt="" />
             <div className="text-center">
                    <h1 className="font-bold text-xl mt-2 mb-4">{name}</h1>
                    <h3 className=" font-semibold text-lg">{bio}</h3>
             </div>
             
            </div>
            </div>
            
        );
    }



}

export default UserClass