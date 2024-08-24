import profile from "../assets/images/profile.png";

const Header = () => {
    return (
         <div className="flex justify-between item-center p-4 mx-4">
             <h1 className="text-3xl font-bold ">React  basic blog project</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;