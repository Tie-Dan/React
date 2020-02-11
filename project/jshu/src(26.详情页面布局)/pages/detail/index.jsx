import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>
          Python与树莓派的故事：一款35美元的计算机是如何改变世界的？
        </Header>
        <Content>
          <img
            src="https://upload-images.jianshu.io/upload_images/15383096-a1aa8224aed77539.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/438/format/webp"
            alt="123"
          />
          <p>
            <b>今天，树莓派已经变成一种现象，是全球第三大畅销的通用计算机。</b>
            如果你对计算机感兴趣的话，很有可能你已经上手了一块这种英国制造的板子插在什么地方。它已经植入到笔记本、平板电脑和机器人里面；它已经跑到国际空间站上做实验；它甚至进入到主流媒体，在《机器人先生》这样的电视节目以及《超能陆战队》这样的电影里面亮相。我们还没有提到它在商业当中扮演的角色，从瘦客户端到工控系统，树莓派几乎无所不能。
          </p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail;
