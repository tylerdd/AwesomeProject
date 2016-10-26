# AwesomeProject

a simple react native demo project for quick peek

## 本项目的目的

在搭建完React Native开发环境后，按照官网文档示例，一般会执行如下命令来初始化一个项目：

```bash
react-native init AwesomeProject
```

这个过程一般来说相当的漫长（即使你已经翻墙！），本项目的目的就是加速（替代）这个过程。

## 如何使用

不用再执行`react-native init AwesomeProject`，直接下载zip文件到本地即可。

## 做了哪些改动

- [gradle-wrapper.properties](https://github.com/simongfxu/AwesomeProject/blob/master/android/gradle/wrapper/gradle-wrapper.properties)
- [gradle.properties](https://github.com/simongfxu/AwesomeProject/blob/master/android/gradle.properties)

`gradle-wrapper.properties`配置早先会从网络上拉去zip包（60多M），现在直接从本地读取。
`gradle.properties`加入一个socks代理（使用了ShadowSocks）

## React Native版本

**0.35.0**
