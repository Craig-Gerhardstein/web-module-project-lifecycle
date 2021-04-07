import React from 'react'
import styled from 'styled-components'

class Followers extends React.Component {
 
    
    
    render(){
        
        return(
          
                <div>
                     {this.props.followers.map(item => {
                      return(
                        <Container>
                            <ImgDiv>
                                <img src={item.avatar_url} alt={item.login} />
                            
                            </ImgDiv>
                            <div>
                                <p>{item.login}</p>
                            </div>


                        </Container>
                       
                      )
                  })}

                </div>
                   
                 
                        
                    

                
           
        )
    }
}
const Container = styled.div ` 
border: 1px solid black;
width: 100%;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 1%;
`
const ImgDiv = styled.div ` 

width: 50%;
img{
    width: 100%;
}
`

export default Followers
