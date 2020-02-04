import styled from 'styled-components'

const StyledList = styled.section`
ol {
  color: gray;

  li {
    margin-bottom: 10px;
    font-size: 0.8rem;

    .main-content,
    .sub-content {
      margin-left: 10px;
    }

    .main-content {
      color: black;
      font-size: 1rem;
    }
  }
}
`

export default StyledList
