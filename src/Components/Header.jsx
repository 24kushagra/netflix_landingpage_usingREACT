

export const Header=()=>{
    return(
        <>
        <div className="nav">
            <div className="logo">
                <img src="./src/assets/Netflix_Logo_PMS.png" alt="" />
                </div>
            <div className="nav-part2">
              <select name="language" id="lang">
                 <option value="English">English</option>
                 <option value="Hindi">हिन्दी</option>
             </select>
                <button id="sign-in">Sign In</button>
            </div>
        </div>
        </>
    )
}