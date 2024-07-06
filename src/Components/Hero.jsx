

 export const Hero = ()=>{
    return(
        <>
        <div className="hero ">
            <h1>Unlimited movies,TV shows and more</h1>
            <h3>Watch anywhere.Cancel anytime</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-field">
            <input id="input" type="email" placeholder="Email address" /> <button id="get-started"><h4>Get Started </h4> <i className="ri-arrow-right-s-line"></i> </button>
            </div>
        </div>
        </>
    )
}