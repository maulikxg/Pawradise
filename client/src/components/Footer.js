import { Link, useNavigate } from "react-router-dom";
import Footerimg from "../assets/images/footerTop.png";
import { AiFillGithub } from "react-icons/ai";
import "../styles/footer.css";
import { postData } from "../utils/api";
import { toast } from "react-toastify";

export default function Footer() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await postData("logout");
      if (response.status === 200) {
        navigate("/verify/login");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="footerContainer">
      <div>
        <img className="footerImg" src={Footerimg} alt="Footer"></img>
      </div>
      <div className="footer">
        <div className="aboutWiggles">
          <h3 className="footerHeading">About Pawradise</h3>
          <p>
            Pawradise is a platform where pet owners can effortlessly arrange
            playdates for their furry friends, share pet-care insights, and
            forge lasting connections. Wiggles isn't just a social space; it's a
            vibrant community where pets take center stage. 🐾 <br />
            But we're more than just a platform; we're an open-source project.
            This means our community shapes Pawradise , ensuring it evolves with
            your needs. At Pawradise , every wag, chirp, or meow deserves to
            find its kindred spirit.
          </p>
        </div>
        <div className="supportWiggles">
          <h3 className="footerHeading">Support</h3>
          <div className="supportLogin">
            <div>
              <Link to="/Vaccination" className="supportLinks">
                Vaccination
              </Link>
              <Link to="/generateqr" className="supportLinks">
                Pet QR
              </Link>
              <Link className="supportLinks" to="/Friends">
                Friends
              </Link>
            </div>
            <div>
              <Link to="/verify/Contact" className="supportLinks">
                Contact Us
              </Link>
              <Link to="/verify/AboutCreators" className="supportLinks">
                Creators
              </Link>
            </div>
            <div>
              <Link className="supportLinks" to="/Explore">
                Explore
              </Link>
              <div className="supportLinks" onClick={logout}>
                Logout
              </div>
            </div>
          </div>
          <div className="footerSocialLinksContainer">
            <a
              className="footerSocialLinks"
              href="https://github.com/maulikxg/Pawradise"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="copyrightBar"></div>
    </div>
  );
}
