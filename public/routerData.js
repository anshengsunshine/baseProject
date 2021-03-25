{
    "routerData"[
        // 登录
        {
            path: "/",
            name: "Login",
            hidden: true,
            meta: { label: "登录" },
            component: () =>
                import(/* webpackChunkName: "login" */ "@/views/user/Login.vue"),
        },
        // 管理后台 - 首页
        {
            path: "/publicOption",
            name: "publicOption",
            meta: {
                label: "舆情监测",
                icon: "analysis"
            },
            redirect: "publicOptionAll",
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
            children: [
                // publicOptionAll--》舆情总览
                {
                    path: "/publicOptionAll",
                    name: "publicOptionAll",
                    component: () =>
                        import(/* webpackChunkName: "publicOptionAll" */ "@/views/publicOption/publicOptionAll/PublicOptionAll"),
                    meta: {
                        label: "全国舆情总览",
                    }
                },
                // publicOptionAll--》舆情总览
                {
                    path: "/safeEvTrack",
                    name: "SafeEvTrack",
                    component: () =>
                        import(/* webpackChunkName: "safeEvTrack" */ "@/views/publicOption/safeEvTrack/SafeEvTrack"),
                    meta: {
                        label: "重大质量事件追踪",
                    }
                },
                // publicOptionAllZJ--》舆情总览-》浙江
                // {
                //   path: "/publicOption/publicOptionZJ",
                //   name: "publicOptionZJ",
                //   component: () =>
                //     import(/* webpackChunkName: "publicOptionZJ" */ "@/views/publicOption/publicOptionZJ/PublicOptionZJ"),
                //   meta: {
                //     label: "浙江舆情总览",
                //   }
                // },
                // publicOptionAllZJ--》舆情总览-》浙江 下钻
                {
                    path: "/publicOption/PublicZJDown",
                    name: "PublicZJDown",
                    component: () =>
                        import(/* webpackChunkName: "PublicZJDown" */ "@/views/publicOption/publicOptionZJDown/PublicZJDown"),
                    meta: {
                        label: "浙江舆情总览",
                    }
                },
                // publicOptionDashboard-->舆情分析总览
                {
                    path: "/publicOption/analysis",
                    name: "analysis",
                    component: () =>
                        import(/* webpackChunkName: "analysis" */ "@/views/publicOption/analysis/Analysis"),
                    meta: {
                        label: "舆情分析总览",
                    }
                },
            ]
        },
        // 案例库
        {
            path: "/list",
            name: "list",
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
            meta: {
                label: "案例库",
                icon: "list",
            },
            redirect: "/list/publicOption",
            children: [{
                path: "/list/publicOption",
                name: "PublicOptionList",
                component: () =>
                    import(/* webpackChunkName: "publicOptionList" */ "@/views/list/PublicOptionList"),
                meta: {
                    label: "舆情",
                }
            },
            {
                path: "/list/pairwiseConstraints",
                name: "PairwiseConstraintsList",
                component: () =>
                    import(/* webpackChunkName: "pairwiseConstraintsList" */ "@/views/list/PairwiseConstraintsList"),
                meta: {
                    label: "监督抽查",
                }
            },
            {
                path: "/list/defectRecall",
                name: "DefectRecallList",
                component: () =>
                    import(/* webpackChunkName: "defectRecallList" */ "@/views/list/DefectRecallList"),
                meta: {
                    label: "缺陷召回",
                }
            },
            {
                path: "/list/ComplaintsReportList",
                name: "ComplaintsReportList",
                meta: {
                    label: "投诉举报",
                },
                component: () =>
                    import(/* webpackChunkName: "complaintsReportList" */ "@/views/list/ComplaintsReportList"),
            },
            {
                path: "/list/2",
                name: "list2",
                meta: {
                    label: "风险研究项目",
                },
                // component: () =>
                //     import("@/views/list/warningMonitorProject"),
            },
            {
                path: "/list/monitorProject",
                name: "MonitorProject",
                meta: {
                    label: "风险监控项目",
                },
                component: () =>
                    import(/* webpackChunkName: "monitorProject" */ "@/views/list/MonitorProject"),
            },
            {
                path: "/warningAnalysisList",
                name: "WarningAnalysisList",
                component: () =>
                    import(/* webpackChunkName: "warningAnalysis" */ "@/views/list/WarningAnalysisList"),
                meta: {
                    label: "预警（分析）报告",
                },
            }
            ]
        },
        //《质安资讯》
        {
            path: "/safeInfor",
            name: "SafeInfor",
            meta: {
                label: "《质安资讯》",
                icon: "allShow"
            },
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
            redirect: "/safeInformation",
            children: [
                {
                    path: "/safeInformation",
                    name: "safeInformation",
                    component: () =>
                        import(/* webpackChunkName: "safeInformation" */ "@/views/safeInformation/SafeInformation"),
                    meta: {
                        label: "《质安资讯》",
                        icon: "allShow"
                    },
                }
            ]
        },
        {
            path: "/TVInfor",
            name: "TVInfor",
            meta: {
                label: "多媒体监测",
                icon: "TVpublic"
            },
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
            redirect: "/TVInformation",
            children: [
                {
                    path: "/TVInformation",
                    name: "TVInformation",
                    component: () =>
                        import(/* webpackChunkName: "safeInformation" */ "@/views/TVInformation/TVInformation"),
                    meta: {
                        label: "多媒体监测",
                        icon: "TVpublic"
                    },
                }
            ]
        },
        // 监测点信息报送库
        {
            path: "/infoBanks",
            name: "InfoBanks",
            meta: {
                label: "监测点信息报送库",
                icon: "danger",
            },
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrap.vue"),
            redirect: "/infobank",
            children: [
                {
                    path: "/infobank",
                    name: "Infobank",
                    component: () =>
                        import(/* webpackChunkName: "infobank" */ "@/views/infobank/Infobank"),
                    meta: {
                        label: "监测点信息报送库",
                        icon: "danger",
                    },
                }
            ]
        },
        // 上传表单
        {
            path: "/form/advanced-form",
            name: "AdvancedForm",
            hidden: true,
            meta: {
                label: "上传表单",
            },
            component: () =>
                import(/* webpackChunkName: "layoutWrap" */ "@/views/layout/LayoutWrapHeader.vue"),
            redirect: "/form/advanced-form",
            children: [
                {
                    path: "/form/advanced-form",
                    hidden: true,
                    name: "AdvanceForm",
                    component: () =>
                        import("@/views/form/AdvancedForm"),
                    meta: {
                        title: "上传表单",
                    }
                },
            ]
        },

        {
            path: "/404",
            hidden: true,
            component: () =>
                import( /* webpackChunkName: "fail" */ "@/views/exception/404")
        },
        {
            path: "/403",
            hidden: true,
            component: () =>
                import( /* webpackChunkName: "fail" */ "@/views/exception/403")
        },
        {
            path: "/500",
            hidden: true,
            component: () =>
                import( /* webpackChunkName: "fail" */ "@/views/exception/500")
        },
        {
            path: "*",
            hidden: true,
            redirect: "/404"
        }
    ]
}