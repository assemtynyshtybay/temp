import { styled } from "@mui/material";

const Img = styled('img')`
    width: 100px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(50%,0%);
    margin: 5px 0px;
`
const Profile = () => {
    return(
        <>
         <div className="profile">
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdYTi9tAmxaxf9RKy3xQBrxJrl4QNnUQ5ZE2Nkas&s" alt="profile picture"/>
            <div>
                <span>Name:</span>
                <span>Assem</span>
            </div>
            <div>
                <span>Lastname:</span>
                <span>Tynyshtybay</span>
            </div>
            <div>
                <span>Position:</span>
                <span></span>
            </div>
            <div>
                <span>Department:</span>
                <span>IT</span>
            </div>
         </div>
        </>
    )
}
export default Profile;