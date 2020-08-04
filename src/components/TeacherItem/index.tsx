import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/57046315?s=460&u=4f879ff961a4964ba3f71bd2021710c6c2dc05a7&v=4" alt="Inathan"/>
                <div>
                    <strong>Inathan</strong>
                    <span>Infomática</span>
                </div>
            </header>
            <p>
                Estudante do curso de Análise e Desenvolvimento de Sistemas.
                <br/><br/>
                Dominando JavaScript com React, React Native e Node.js.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 70,00</strong>
                </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;