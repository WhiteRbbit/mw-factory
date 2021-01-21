import {
  CreditCard,
  LocalShipping,
  Lock,
  RecordVoiceOver,
} from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
import { DATA_LINKS } from "./navigation-links/data-links";
import FooterLinks from "./navigation-links/FooterLinks";
import visa from "../../images/visa.png";
import visaCb from "../../images/visa-carte-bleue.png";
import masterCard from "../../images/mastercard.png";
import payPal from "../../images/pay-pal.png";
import visaElectron from "../../images/visa-electron.png";
import americanExpress from "../../images/american-express.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* TOP PART */}
      <div className="footer__top ">
        <div className="footer__topContainer container">
          <div className="footer__topSectionContainer">
            <div className="footer__topSection">
              <LocalShipping />
              <div>
                <h3>Livraison Offerte</h3>
                <p>à partir de 80€ d'achats</p>
              </div>
            </div>
          </div>

          <div className="footer__topSectionContainer">
            <div className="footer__topSection">
              <CreditCard />
              <div>
                <h3>Remboursement Garantis</h3>
                <p>Si vous rencontrez des problèmes</p>
              </div>
            </div>
          </div>

          <div className="footer__topSectionContainer">
            <div className="footer__topSection">
              <RecordVoiceOver />
              <div>
                <h3>Support En Ligne 24/7</h3>
                <p>N'hésitez pas à nous contacter</p>
              </div>
            </div>
          </div>

          <div className="footer__topSectionContainer">
            <div className="footer__topSection">
              <Lock />
              <div>
                <h3>Paiements Sécurisés</h3>
                <p>100% sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALL THE FOOTER LINKS */}
      <div className="footer__linksContainer container">
        {DATA_LINKS.map((data) => (
          <FooterLinks
            key={data.id}
            categoryName={data.title}
            links={data.links}
          />
        ))}
      </div>

      <hr />

      {/* BOTTOM PART */}
      <div className="footer__bottom container">
        <p>©{new Date().getFullYear()} Men & Women Factory</p>
        <div>
          <img src={visa} alt="visa logo" />
          <img src={visaCb} alt="visa carte bleue logo" />
          <img src={masterCard} alt="mastercard logo" />
          <img src={payPal} alt="paypal logo" />
          <img src={visaElectron} alt="visa electron logo" />
          <img src={americanExpress} alt="amercian express logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
