





const emailRegx = RegExp(/^\w+([-._]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

class StandardForm {
    

    constructor(type = null,css =null){
        this.type = type;
        this.css = css;
     
    }
    // set success css or write null
    successBorderCss = "is-valid";
    successFieldCss = "valid-feedback";
    successValue ="looks good!";

    myname = "ademola"; 


   
    // alert = (value) =>
    // {
    //     let  arr = { css: null, value:null };
    //     if(value.length > 0 &&  this.type === 'borderError'){
    //         arr.css = this.css;
    //     }else if(value.length > 0 &&  this.type === 'alertError'){
    //         arr.css = this.css;
    //         arr.value = value;
    //     }
    //     return arr
    // }



    isformValid = (formErrors,formValue) =>{
        let Valid = true;
        // check for error fields
        Object.values(formErrors).forEach( elem =>{
           elem.length > 0 && (Valid = false); // 
         // console.log(elem.length,' form errors');
        });
         // check form value fields
        Object.values(formValue).forEach( elem =>{
            elem === "" && (Valid = false);
           // console.log(elem,' form values');
         });
     //  console.log(Valid);
        return Valid;

    }


    alert = (value) =>
    { 
        // values is the form errors 
        let  arr = { css: null, value:null };
        if(value.length > 1 &&  this.type === 'borderError'){
            arr.css = this.css; // danger css
        }else if(value.length < 1 &&  this.type === 'borderError'){
            arr.css = this.successBorderCss; //success css
        }else if(value.length > 1 &&  this.type === 'alertError'){
            arr.css = this.css;
            arr.value = value;
        }else if(value.length < 1 &&  this.type === 'alertError'){
            arr.css = this.successFieldCss;
            arr.value = this.successValue; // success value
        }
        return arr
    }
    

    validation =(name,value,formErrsState,formValueState)=>{
        // const {name,value} = event.target;
        // let formErrsState = this.state.myForm.formErrors;
        // let formValueState = this.state.myForm;
        const arr = {
            errorState: null,
            valueState:null
        };

        switch (name) {
            case 'name':
            formErrsState.name = value.length < 5 ? 
            "Name must be more than of 8 characters" :""
            formValueState.name = value
            break;
            case 'firstname':
            formErrsState.firstname = value.length < 2 ? 
            "First name must be more than of 2 characters" :""
            formValueState.firstname = value
            break;
            case 'lastname':
            formErrsState.lastname = value.length < 2 ? 
            "Last name must be more than of 2 characters" :""
            formValueState.lastname = value
            break;
            case 'fullname':
            formErrsState.fullname = value.length < 5 ? 
            "Fullname must be more than of 8 characters" :""
            formValueState.fullname = value
            break;
            case 'phone':
            formErrsState.phone = value.length < 6 || isNaN(value) ?
             "Please provide a valid Phone number" :""
            formValueState.phone = value
            break;
            case 'comments':
            formErrsState.comments = value.length === 0 || value.length > 2 ?
             "" :""
            formValueState.comments = value
            break;            
            case 'mobile':
            formErrsState.mobile = value.length < 6 || isNaN(value) ?
             "Please provide a valid Mobile number" :""
            formValueState.mobile = value
            break;
            case 'amount':
            formErrsState.amount = value.length < 1 || isNaN(value) ?
             "Please provide a valid Amount" :""
            formValueState.amount = value
            break;
            case 'capital':
            formErrsState.capital = value.length < 1 || isNaN(value) ?
             "Please provide a valid initial capital" :""
            formValueState.capital = value
            break;
            case 'email':
            formErrsState.email = value.length > 0 && emailRegx.test(value) ? 
            "" :"Must enter a valid email address"
            formValueState.email = value
            break;
            case 'currency':
            formErrsState.currency = value.length < 3 ? 
            "Please provide a valid currency" :""
            formValueState.currency = value
            break;
            case 'gender':
            formErrsState.gender = value ==='select' ? 
            "Please select a valid gender" :""
            formValueState.gender = value
            break;
            case 'country':
            formErrsState.country = value ==='select' ? 
            "Please select a valid country" :""
            formValueState.country = value
            break;
            case 'purpose':
            formErrsState.purpose = value.length < 3 ? 
            "Please select a valid purpose" :""
            formValueState.purpose = value
            break;
            case 'password':
            formErrsState.password = value.length < 6 ? 
            "Password cannot be less than 6" :""
            formValueState.password = value
            break;
            case 'status':
            formErrsState.status = value === "Choose..." ? 
            "Please select a valid status" :""
            formValueState.status = value
            break;
            case 'address':
            formErrsState.address = value.length < 5 ? 
            "Address - minimum of 6 character" :""
            formValueState.address = value
            break;        
            default:
            break;
        }
             arr.errorState = formErrsState;
             arr.valueState = formValueState;
        return arr;
    }








    

}


export default StandardForm;