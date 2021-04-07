import React from 'react'

class Followers extends React.Component {
 
    
    
    render(){
        
        return(
          
                <div>
                     {this.props.followers.map(item => {
                      return(
                        <div>
                            <img src={item.avatar_url} alt={item.login} />
                            <p>{item.login}</p>
                        </div>
                      )
                  })}

                </div>
                   
                 
                        
                    

                
           
        )
    }
}

export default Followers
