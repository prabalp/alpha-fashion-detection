import React, {useState} from 'react'
import styled from 'styled-components'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const Title = () => {

    const allTags = [
        "short sleeve top",
        "long sleeve top",
        "short sleeve outwear",
        "long sleeve outwear",
        "vest",
        "sling",
        "shorts",
        "trousers",
        "skirt",
        "short sleeve dress",
        "long sleeve dress",
        "vest dress",
        "sling dress",
    ];
    // let str = "";
    
    function stringUpdate(val){
        let str="";
        console.log(val);
        console.log(str);
        if(val===13){
            str='111111111111111'
        }
        for (let i = 0; i < 13; i++) {
            console.log(i);
            if(i == val){
                str+='1';
            }else{
                str+='0';
            }
        } 
        console.log(str);
        decode(str);
        return str;
    }
    function decode(str){
        var arr = [];
        for (let i = 0; i < 13; i++){
            if(str[i]==='1'){
                arr.push(allTags[i]);
            }
        }
        console.log(arr);
        
        return arr;
    }
    
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
        console.log("yes");
    };

      
    const handleSubmit = (event) => {
        event.preventDefault();
        stringUpdate(value)
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <FormControl
            sx={{ m: 3 }}
            component="fieldset"
            error={error}
            variant="standard"
        >
        <FormLabel component="legend">Pop quiz: MUI is...</FormLabel>
            <RadioGroup row aria-label="class" name="row-radio-buttons-group"  onChange={handleRadioChange}>
                <FormControlLabel value="0" control={<Radio />} label="short sleeve top" />
                <FormControlLabel value="1" control={<Radio />} label="long sleeve top" />
                <FormControlLabel value="2" control={<Radio />} label="short sleeve outwear" />
                <FormControlLabel value="3" control={<Radio />} label="long sleeve outwear" />
                <FormControlLabel value="4" control={<Radio />} label="vest" />
                <FormControlLabel value="5" control={<Radio />} label="sling" />
                <FormControlLabel value="6" control={<Radio />} label="shorts" />
                <FormControlLabel value="7" control={<Radio />} label="trousers" />
                <FormControlLabel value="8" control={<Radio />} label="skirt" />
                <FormControlLabel value="9" control={<Radio />} label="short sleeve dress" />
                <FormControlLabel value="10" control={<Radio />} label="long sleeve dress" />
                <FormControlLabel value="11" control={<Radio />} label="vest dress" />
                <FormControlLabel value="12" control={<Radio />} label="sling dress" />
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Search
                </Button>
            </RadioGroup>
      </FormControl>
    </form>
    )
}

export default Title;

const Wrapper =styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    margin-top: 30px; 
    padding: 12px 4px 4px 16px;
    backgroung-color: white;
    color: black;
    FormControlLabel {
        
        white-space: normal;

        margin-left: 30px !important;
    
        text-indent: 0px !important;
    }
`
const LogoWrapper= styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
    }

`
