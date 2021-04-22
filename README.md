# 阿里云函数计算：midway-hook前后端一体化框架

通过该应用，您可以简单快速的创建一个midway-hook框架到阿里云函数计算服务。

- 下载命令行工具：`npm install -g @serverless-devs/s`
- 初始化一个模版项目：`s init devsapp/midway-hook-example:midway-hook-react`
- 进入项目后部署项目：`s deploy`
- 部署过程中可能需要阿里云密钥的支持，部署完成之后会获得到临时域名可供测试

## 完整Yaml

```
edition: 1.0.0          #  命令行YAML规范版本，遵循语义化版本（Semantic Versioning）规范
name: midwayHookApp          #  项目名称
access: aliyun-release  #  秘钥别名

services:
  midway-hook-service: #  服务名称
    component: midway-hook  # 组件名称
    props:     # 阿里云函数计算所支持的地区
      service: 
        name: devs-midway-app # 服务名
      provider: # 当前的服务提供商目前只支持aliyun
        name: aliyun
        runtime: nodejs12
        region: cn-hangzhou
      aggregation: # 聚合部署字段
        fass-devs: # 函数名
          functionsPattern:
            - '*'
      package: # 构建的配置信息
        include:
          - build
``` 
props配置详细介绍参考 [midway-hook f.yml配置](https://www.yuque.com/midwayjs/midway_v2/serverless_yml)

## 模板应用
目前支持模板应用包括
- react模板: `s init devsapp/midway-hook-example:midway-hook-react`
- vue模板 `s init devsapp/midway-hook-example:midway-hook-vue`


-----
> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367    
