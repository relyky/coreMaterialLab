import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { NavMenu } from './NavMenu';

export default function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavMenu />
            <Container maxWidth="lg" style={{backgroundColor:'yellow'}} >
                {props.children}
            </Container>
        </React.Fragment>
    );
}

//import { Container } from 'reactstrap';
//import { NavMenu } from './NavMenu';

//export class Layout extends Component {
//  static displayName = Layout.name;

//  render () {
//    return (
//      <div>
//        <NavMenu />
//        <Container>
//          {this.props.children}
//        </Container>
//      </div>
//    );
//  }
//}
