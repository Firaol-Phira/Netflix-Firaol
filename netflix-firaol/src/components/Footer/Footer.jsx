import React from 'react'
import FacebookOutLinedIcon from "@mui/icons-material/FacebookOutLined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube"
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container ">
        <div className="footer_icons">
          <FacebookOutLinedIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description </li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">
            &copy;1997-2024 Netflix,inc.
        </div>
      </div>
    </div>
  );
}

export default Footer
