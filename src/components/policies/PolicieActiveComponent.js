import React from "react";
import AvatarComponent from "./AvatarComponent";
import CoveragesBarComponent from "./CoveragesBarComponent";

const PolicieActiveComponent = ({ activePolicie }) => {
  /* Destructuring values */
  const {
    coberturas: { lesiones_corporales },
  } = activePolicie;
  const {
    coberturas: { danos_propiedad },
  } = activePolicie;
  const {
    coberturas: { gastos_medicos },
  } = activePolicie;
  const { beneficiosicons } = activePolicie;

  return (
    <div className="insurance_card card_recommended_container">
      <div className="insurance_card_header">
        <div className="people_badges_wrapper">
          <div className="people_badges_container">
            {activePolicie.avatars.map((avatar) => (
              <AvatarComponent key={avatar} avatar={avatar} />
            ))}
          </div>
          <div className="sales_rating_container">
            <p> + {activePolicie.sales_rating} lo han elegido</p>
          </div>
        </div>
      </div>
      <div className="insurance_card_content">
        <h3 className="company">Compañía: {activePolicie.Compania}</h3>
        <div className="insurance_card_price_container">
          <span className="insurance_card_price_number">
            <div className="insurance_card_price_sign">$ </div>
            {activePolicie.monthly_price}
          </span>
          <div className="insurance_card_price_description">/ mes.</div>
        </div>
        <span className="insurance_card_fee_description text-center">
          3 Mensualidades
        </span>
        <div className="validity_text_container text-center">
          Vigencia por 1 año
        </div>

        <CoveragesBarComponent
          lesiones_corporales={lesiones_corporales}
          danos_propiedad={danos_propiedad}
          gastos_medicos={gastos_medicos}
        />

        <span className="benefits_title text-center">Beneficios</span>
        <div className="benefits_container">
          <ul className="benefits_list">
            {beneficiosicons.ambulancia && <li>Ambulancia</li>}
            {beneficiosicons.asistencia_vial && <li>Asistencia Vial</li>}
            {beneficiosicons.grua && <li>Grúa</li>}
            {beneficiosicons.revisado_gratis && <li>Revisado Gratis</li>}
            {beneficiosicons.asistencia_legal && <li>Asistencia Legal</li>}
          </ul>
        </div>
        <div className="insurance_card_button_container">
          <button
            type="button"
            className="ant-btn insurance_card_button Codigo_2276 ant-btn-primary ant-btn-lg"
          >
            <span>Elegir </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicieActiveComponent;
