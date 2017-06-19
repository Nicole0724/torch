"use strict";;
(function() {
	var pageCom = {
		getProvinces: function() {
			/*获取查询全国所有的省份*/
			ajaxFuncs.get({
				urlname: "/api/regions/provinces",
				funcs: {
					funcSuccessful: function(data) {

					}
				}
			});
		},
		getProvinces: function(id) {
			/*查询某个省下面的所有的市*/
			ajaxFuncs.get({
				urlname: "/api/regions/cities",
				params: {
					"id": id
				},
				funcs: {
					funcSuccessful: function(data) {

					}
				}
			});
		},
		getProvinces: function(id) {
			/*查询某个市下面的所有的区/县*/
			ajaxFuncs.get({
				urlname: "/api/regions/cities",
				params: {
					"id": id
				},
				funcs: {
					funcSuccessful: function(data) {

					}
				}
			});
		}
	};
	window.pageCom = pageCom;
})();