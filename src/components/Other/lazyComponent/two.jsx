import React, { Component ,Fragment} from 'react'
import Hookds from '../Hooks'
import Effect from '../Effect'
import ContextDemo from '../Context'
import Slot from '../Slot'
export default class Two extends Component {
    render() {
        return (
            <div>
                <Hookds/>
                <Effect/>
                <Fragment>
                    <div>Fragment:div ++ key</div>
                </Fragment>
                <>
                <div>"":div ++ nokey</div>
                </>
                <ContextDemo/>
                <Slot/>
            </div>
        )
    }
}
