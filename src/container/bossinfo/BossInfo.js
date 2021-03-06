import React from 'react'
import { NavBar, Icon, Grid, List, InputItem, Button, TextareaItem } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AvatarSelector from '../../conponent/avatarselector/AvatarSelector'
import { update } from '../../redux/user.redux'

@connect(
    state => state.user,
    { update }
)
class BossInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar
                    mode="lihit"
                >NavBar</NavBar>
                <AvatarSelector
                    // 组件之间交互
                    selectAvatar={(images) => {
                        this.setState({
                            avatar: images
                        })
                    }}
                ></AvatarSelector>
                <List>
                    <InputItem
                        onChange={v => this.handleChange('title', v)}
                    >职位名称</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('company', v)}
                    >公司名称</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('money', v)}
                    >薪资标准</InputItem>
                    <TextareaItem
                        title="职位要求"
                        placeholder="不少于30字符"
                        data-seed="logId"
                        autoHeight
                        onChange={v => this.handleChange('desc', v)}
                    />
                    <Button
                        type="primary"
                        onClick={() => {
                            this.props.update(this.state)
                        }}
                    >保存</Button>
                </List>
            </div>
        );
    }
}

export default BossInfo