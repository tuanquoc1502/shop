import styled from 'styled-components';

export const WrapperForm = styled.div`
    display: flex;
    gap: 10px;

    input {
        border-radius: 3px;
        outline: none;
        overflow: hidden;
    }

    button {
        cursor: pointer;
    }
`

export const WrapperContent = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 50px;
`

export const Stt = styled.div`
   font-weight: 900;
`


export const Item = styled.div`
position: relative;
    padding: 5px 10px;
    min-height: 50px;
    border: 1px solid #333;
    margin: 10px 0;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`

    export const Name = styled.div`
    margin: 5px 0;
`

export const Description = styled.div``

export const Delete = styled.div`
    position: absolute;
    right: -50px;
    color: red;
    font-weight: 900;
    border: 1px solid red;
    padding: 5px;
`


