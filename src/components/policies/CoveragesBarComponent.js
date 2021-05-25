import React from 'react'

const CoveragesBarComponent = ({ lesiones_corporales, danos_propiedad, gastos_medicos }) => {
	return (
		<div className="coverages_bars_container">
          <p className="coverages_title">Coberturas por accidente</p>
          <div className="sc-ckVGcZ bgzzQK">
            <div className="label_bar_container">
              <span className="label_container">Lesiones Causadas a 3ros</span>
              <div className="bar_container">
                <div className="bar_level_container first active">
                  $ {lesiones_corporales.persona}{" "}
                </div>
                <div className="bar_level_container second false"></div>
                <div className="bar_level_container third false"></div>
              </div>
            </div>
          </div>
          <div className="sc-ckVGcZ bgzzQK">
            <div className="label_bar_container">
              <span className="label_container">Daños a Propiedad Ajena</span>
              <div className="bar_container">
                <div className="bar_level_container first active">
                  $ {danos_propiedad.persona}
                </div>
                <div className="bar_level_container second false"></div>
                <div className="bar_level_container third false"></div>
              </div>
            </div>
          </div>
          <div className="sc-ckVGcZ bgzzQK">
            <div className="label_bar_container">
              <span className="label_container">Gastos Médicos</span>
              <div className="bar_container">
                <div className="bar_level_container first active">
                  $ {gastos_medicos.persona}
                </div>
                <div className="bar_level_container second false"></div>
                <div className="bar_level_container third false"></div>
              </div>
            </div>
          </div>
        </div>
	)
}

export default CoveragesBarComponent
