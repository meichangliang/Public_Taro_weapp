/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-26 11:39:23
 * @LastEditTime: 2019-04-26 17:38:06
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Button, Image, Text } from '@tarojs/components';
import { getStore, getUrlParam } from '@/utils/utils';
import { WebView_domain, baseUrl } from '@/config/baseUrl';
import './index.less';

//image
import { tusiji } from '@/images/load';
//image
class _page extends Component {
  config = {
    navigationBarTitleText: 'PageDemo',
    navigationBarBackgroundColor: '#62A8FA',
  };

  constructor(props) {
    super(props);
    const token = getStore('userToken');
    this.state = {
      token,
    };
  }

  componentWillMount() { }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidHide() { }

  componentDidShow() {
    let { id } = getUrlParam();
    console.info('id--', id);
  }

  render() {
    return (
      <View className="page">
        这里是demo页面
        <Button>这里是demo页面 Button</Button>
        <Text className="text">这里是demo页面 Text</Text>
        <Image mode="widthFix" src={tusiji} />
        <View className="base_router">
          <View className="text">
            <Text className="name">image_domain :</Text>
            {image_domain}
          </View>
          <View className="text">
            <Text className="name">WebView_domain :</Text> {WebView_domain}
          </View>
          <View className="text">
            <Text className="name">baseUrl : </Text>
            {baseUrl}
          </View>
        </View>
      </View>
    );
  }
}

export default _page;