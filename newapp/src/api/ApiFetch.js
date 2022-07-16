import React, {Component} from 'react';

class ApiFetch extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        const req ={
            method: 'POST',
            headers: { 
                'Ocp-Apim-Subscription-Key' : '2c6ccbcf346a466c9a189c3de03781ef',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url : "https://c4.wallpaperflare.com/wallpaper/649/496/942/farewell-to-way-band-faces-girl-wallpaper-preview.jpg"
            })
        };

        fetch('https://demo-temp.cognitiveservices.azure.com/face/v1.0/detect?overload=stream&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise&recognitionModel=recognition_01&returnRecognitionModel=True&detectionModel=detection_01',req)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render(){

        var { isLoaded, items } =this.state;
        if(!isLoaded){
            return<center><div>Loading...</div></center>;
        }
        else{
            return(
                <center>
                    <div>
                        <h2>Loaded</h2>
                        <ul>
                            {items.map(item => (
                                 <li key={item.faceId}>
                                    {item.faceAttributes.gender} | {item.faceAttributes.age}
                                 </li>
                            ))}
                        </ul>
                    </div>
                </center>
            );
        }
    }
}
export default ApiFetch;