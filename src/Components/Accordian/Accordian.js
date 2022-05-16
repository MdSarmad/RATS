import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70vh;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Container = styled.div`
  position: absolute;
`;

const Wrap = styled.div`
  background-color: #DBEEF6;
  color: #5c5c5c;
  display: flex;
  margin-top:20px;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 0.7rem ;
    font-size: 1rem;
  }
  
  span {
    margin-right: 1.5rem;
  }:hover{
    background-color: #add8e6;
  }
`;

const Dropdown = styled.div`
  background: #fff;
  color: #000;
  width: 70vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  border: 2px solid #DBEEF6;
  box-sizing: border-box;

  p {
    font-size: 1.13rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#5c5c5c', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;