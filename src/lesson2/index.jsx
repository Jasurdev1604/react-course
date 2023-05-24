import React from 'react';
import App from './App';
// import Info from './Info';

class index extends React.Component {
    render() {
        // const data = {
        //     name:'jasurbek',
        //     age:19
        // }

        const students = [
            {id:1 , name:'eshmat'},
            {id:2 , name:'toshmat'},
            {id:3 , name:'gulmat'},
            {id:4 , name:'ozmat'},
            {id:5 , name:'shaxmat'},
        ]

        return <>
        {/* <App data = {data}/>
        <Info data = {data}/>
        <Info title = 'child'>
            <h1>this is children</h1>
        </Info> */}
        {
            students.map((e) => {
                return<> <App data={e} /> </>
            })
        }
        </>;
    }
}


export default index;