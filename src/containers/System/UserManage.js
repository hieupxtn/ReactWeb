import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import {getAllUsers} from '../../services/userService'

class UserManage extends Component {

    constructor(props){
       super(props);
        this.state = {
            arrUsers: []
       }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            },() =>{
                console.log('check state user', this.state.users);
            })
            console.log('check state user 1', this.state.users);
        }
        console.log('get user from node.js: ', response)
    }

    render() {
        console.log('check render', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className='title text-center'>Manage User</div>
                <div className='users-table mt-4 mx-2'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    console.log('check map', item, index)
                                    return(        
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn-edit'>Edit</button>
                                                <button className='btn-delete'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                         
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
