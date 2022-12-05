import styled from "styled-components";


export const ContainerItem = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
`
export const H1 = styled.h1`
text-align: center;
margin-top: 30px;

`
export const Ul = styled.ul`
  margin: 30px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 20px;
  padding-inline-start: 0;

li{
    list-style: none;
    border-radius: 5px;
    padding: 40px;
    color: #222;
    text-align: center;

    &:hover{
  transform: translateY(-15px);
  transition: all 0.6s;
  transition-timing-function: ease-in-out;
  box-shadow: 0 5px 20px blue;

}
}

img{
    width: 70%;
    height: 60%;
    border-radius: 100%;
    background-color: #fff;

    &:hover{
        transform: translateY(-5px);
        transition: all 1s;
}

}

p{
    margin-top: 30px;
}

`

