import React, {useState} from 'react';
import styles from './FeatureTesting.module.css';
import parser from 'html-react-parser'
import CompTextEditor from '../CompTextEditor/CompTextEditor';
import Location from '../Dashboard/Location/Location';

const FeatureTesting = () => {

  // const [data, setData] = useState('');

  return(
    <div className={styles.FeatureTesting}>
      <section className='container'>
        {/* <CompTextEditor setEditorData={setData}/>
       Implementation: - if the user is not logged in, save the url the user visits in the storage and when the user logs in redirect the user with the value from the section storage. Then clear the section storage
        {parser(data)} */}

        <Location/>


      </section>
    </div>
  )
}
export default FeatureTesting;
