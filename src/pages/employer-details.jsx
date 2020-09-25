import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useForm, Controller} from 'react-hook-form';
import Wrapper from '../components/wrapper';
import TextField from '@material-ui/core/TextField';
import {home, star} from 'ionicons/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import {useParams} from 'react-router';
import {HeaderNameContext} from '../context/hearder';
// //import history from '../components/history'
import {useHistory} from 'react-router-dom';
// import { push } from 'react-router-redux'

import {
  IonContent,
  IonPage,
  IonItem,
  IonRange,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonDatetime,
  IonHeader,
  IonIcon,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

let initialValues = {
  fullName: '',
  gender: '',
  techCos: '',
  email: '',
};
export default function EmplyerDetails(props) {
  const {control, handleSubmit, formState, reset, errors} = useForm({
    defaultValues: {...initialValues},
    mode: 'onChange',
  });
  const {id} = useParams();
  const {ChangeheaderName} = React.useContext(HeaderNameContext);
  const [rowState, setRowState] = React.useState([]);

  const history = useHistory();

  function handleClick() {
    history.push('/doctorbrowse');
  }

  React.useEffect(() => {
    ChangeheaderName("Modify Employer's Details");
    componentEdit();
    // componentSave();
  }, []);

  const endpointsave = `http://dummy.restapiexample.com/api/v1/update/${id}`;

  const endpointedit = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

  async function componentEdit() {
    try {
      const res = await axios.get(
        `http://dummy.restapiexample.com/api/v1/employee/${id}`
      );
      setRowState(res.data.data);
      debugger;
      console.log('results from Get', res.data);
    } catch (e) {
      console.log(`😱 Axios request failed to load: ${e}`);
    }
  }

  async function componentSave() {
    try {
      //const obj = {name:"test",salary:"123",age:"23"}
      debugger;
      const res = await axios.put(
        `http://dummy.restapiexample.com/api/v1/update/${id}`
      );
      setRowState(res.data.data);
      console.log('results fro PUT', res.data);
    } catch (e) {
      console.log(`😱 save faid here: ${e}`);
    }
  }

  // manage the Input
  const [inputValue, setInputValue] = useState();

  const [data, setData] = useState();

  /**
   *
   * @param _fieldName
   */
  const showError = (_fieldName) => {
    return (
      errors[_fieldName] && (
        <div
          style={{
            color: 'red',
            padding: 5,
            paddingLeft: 12,
            fontSize: 'smaller',
          }}
        >
          {_fieldName}: {errors[_fieldName].message || 'This field is required'}
        </div>
      )
    );
  };

  /**
   *
   * @param data
   */
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    setData(data);
  };

  console.log(inputValue);

  return (
    <IonContent>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} style={{padding: 18}}>
          {/* <Box><IonInput>Batch Number </IonInput><IonInput>: Tr 92 </IonInput></Box>      */}

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked">Employer Number:</IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-9>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Status</ion-label>
                <IonSelect>
                  <IonSelectOption value="active">Active</IonSelectOption>
                  <IonSelectOption value="closed">Closed</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-9>
              <IonItem>
                <IonLabel position="stacked">Contact Person:</IonLabel>
                <IonInput
                  type="text"
                  name="contactname"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Employer Name:
                </IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Trading Name</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>

            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Status Change Date:
                </IonLabel>
                <IonInput
                  type="text"
                  name="accountnumber"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Number of Employees</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Contact Person ID's number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Contact Telephone Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="branchcode"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Registration Date:
                </IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>

            <ion-col col-3></ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Contact Cellphone Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Factory address:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  City:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Zip Code:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>

            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Postal Address:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Town:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Postal Code:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Firm Phone Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Firm Fax Number:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Firm Email Address:
                </IonLabel>
                <IonInput
                  type="text"
                  name="DoctorName"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Manegerial District:
                </IonLabel>
                <IonInput
                  type="text"
                  name="accountholder"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">
                  Date Joined the Association
                </ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Area</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Fnb</IonSelectOption>
                  <IonSelectOption value="Cheque">ABSA</IonSelectOption>
                  <IonSelectOption value="Cheque">Capitec</IonSelectOption>
                </IonSelect>
              </ion-item>
              <ion-item class="padding-left-2px">
                <ion-label position="stacked">Party or Non Party</ion-label>
                <IonSelect>
                  <IonSelectOption value="Saving">Saving</IonSelectOption>
                  <IonSelectOption value="Cheque">Cheque</IonSelectOption>
                </IonSelect>
              </ion-item>
            </ion-col>
            <ion-col col-3>
              <IonItem>
                <IonLabel position="stacked" color="danger">
                  Name of Employer's Association:
                </IonLabel>
                <IonInput
                  type="text"
                  name="contact"
                  value={rowState && rowState.employee_name}
                  onInput={(e) => setInputValue(e.target.value)}
                ></IonInput>
              </IonItem>
            </ion-col>
          </ion-row>

          <IonButton>Clear Fields</IonButton>

          <IonButton onClick={() => componentSave()} routerLink="/doctorbrowse">
            submit
          </IonButton>
        </form>
      </Wrapper>
    </IonContent>
  );

  //   return (

  //       <IonContent>
  //         <Wrapper>
  //         <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 18 }}>

  //         {/* <Box><IonInput>Batch Number </IonInput><IonInput>: Tr 92 </IonInput></Box>      */}

  //         <ion-row>
  //         <ion-col >
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Doctor Code:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.id}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             </ion-col>
  //             <ion-col >
  //           <ion-item >
  //             <ion-label position="stacked">Type of Doctor</ion-label>
  //             <IonSelect >
  //                   <IonSelectOption value="GP">GP</IonSelectOption>
  //                   <IonSelectOption value="Surgeon">Surgeon</IonSelectOption>
  //                   <IonSelectOption value="Specialist">Specialist</IonSelectOption>
  //                   <IonSelectOption value="Pyschologist">Pyschologist</IonSelectOption>
  //                 </IonSelect>
  //           </ion-item>
  //         </ion-col>
  //        <ion-col col-9>
  //        <IonItem>
  //             <IonLabel position="stacked" color="danger">Doctor Name:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //         </ion-col>

  //       </ion-row>

  //         <ion-row>
  //         <ion-col >
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Physical address:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_age}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">City:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Zip Code:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             </ion-col>

  //             <ion-col >
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Postal Address:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_age}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Town:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Postal Code:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             </ion-col>
  //             <ion-col >
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Phone Number:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_salary}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Fax Number:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Email Address:</IonLabel>
  //             <IonInput type="text" name="DoctorName" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             </ion-col>
  //             </ion-row>

  //         <ion-row>
  //         <ion-col col-3>
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Account Holder:</IonLabel>
  //             <IonInput type="text" name="accountholder" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //               <ion-item class="padding-left-2px">
  //             <ion-label position="stacked" color="danger">Bank Name</ion-label>
  //             <IonSelect >
  //                   <IonSelectOption value="Saving">Fnb</IonSelectOption>
  //                   <IonSelectOption value="Cheque">ABSA</IonSelectOption>
  //                   <IonSelectOption value="Cheque">Capitec</IonSelectOption>
  //                 </IonSelect>
  //           </ion-item>

  //             </ion-col>

  //             <ion-col col-3>
  //          <IonItem>
  //             <IonLabel position="stacked" color="danger">Account Number:</IonLabel>
  //             <IonInput type="text" name="accountnumber" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <ion-item class="padding-left-2px">
  //             <ion-label position="stacked" color="danger">Acount Type</ion-label>
  //             <IonSelect >
  //                   <IonSelectOption value="Saving">Saving</IonSelectOption>
  //                   <IonSelectOption value="Cheque">Cheque</IonSelectOption>
  //                 </IonSelect>
  //           </ion-item>
  //             </ion-col>
  //             <ion-col col-3>

  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Contact Number:</IonLabel>
  //             <IonInput type="text" name="contact" value={rowState && rowState.employee_salary}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>
  //             <IonItem>
  //             <IonLabel position="stacked" color="danger">Bank Branch Code:</IonLabel>
  //             <IonInput type="text" name="branchcode" value={rowState && rowState.employee_name}
  //               onInput={(e) => setInputValue(e.target.value)}></IonInput>
  //             </IonItem>

  //             </ion-col>

  //             </ion-row>
  //             <IonButton>
  //             Clear Fields
  //           </IonButton>
  //            <IonButton  onClick={() => componentSave()} routerLink="/doctorbrowse" >
  //             submit
  //           </IonButton>
  //          </form>
  //          </Wrapper>
  //       </IonContent>

  //   );
}
