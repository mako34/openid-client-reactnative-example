/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// const { Client, custom, Issuer } = require('openid-client');

// const oi = require('openid-client');


// const got = require('./mgk/got');



import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const fetcho = require('./fetchSimple');

const purina = require('./purina')



const crypto = require('./mgk/crypto');
const secret = 'open-sesame';
const hash = crypto.createHmac('sha256', secret)
                   .update('abcdefg')
                   .digest('hex');
console.log("hasho::",hash);

//
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log('response',responseJson);
//         //  this.setState({
//         //     data: responseJson
//         //  })
//       })
//       .catch((error) => {
//          console.error(error);
//       });

//
// fetcho({
//   input1: 'ajua',
//   input2:'tkt'
// }, (res) => {
//   {console.log({res})}
// })

fetcho({
  username: 'juanman234@gmail.com',
  password: '1234'
}, (res) => {

  console.log({res});
})


purina({
  input1:'a',
  input2:'b'
}, (res) => {
  console.log({res})
})

// Issuer.discover('https://test-identity.wisr.tech/.well-known/openid-configuration') // => Promise
//     .then(function(googleIssuer) {
//         console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);


//         // const client = new googleIssuer.Client({
//         //     client_id: 'zELcpfANLqY7Oqas',
//         //     client_secret: 'TQV5U29k1gHibH5bx1layBo0OSAvAbRT3UYW3EWrSYBB5swxjVfWUa1BS8lqzxG/0v9wruMcrGadany3',
//         //     redirect_uris: ['http://localhost:3000/cb'],
//         //     response_types: ['code'],
//         //     // id_token_signed_response_alg (default "RS256")
//         //     // token_endpoint_auth_method (default "client_secret_basic")
//         // }); // => Client

//         // const client = new issuer.Client({
//         //     client_id: this._configuration.clientId,
//         //     client_secret: this._configuration.clientSecret,
//         // });


//     });


//



// (async () => {
//   const {body} = await got.post('https://httpbin.org/anything', {
//       json: {
//           hello: 'world'
//       },
//       responseType: 'json'
//   });

//   console.log(body.data);
//   //=> {hello: 'world'}
// })();



const App: () => React$Node = () => {


  return (

    
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
