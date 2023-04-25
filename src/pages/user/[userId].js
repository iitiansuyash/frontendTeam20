import { useRouter } from "next/router";
// import { UserContext } from "../contexts/user.context.js";

const Profile = (props) => {
    const router = useRouter();
    const { id, email, name } = router.query;
    console.log(name);
    return ( 
        <>
        hi, 
        <br/>
        id:{id}
        <br/>
        name:{name}
        <br/>
        email:{email}
        </>
     );
}
 
export default Profile;