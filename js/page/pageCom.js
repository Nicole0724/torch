"use strict";;
(function() {
	var pageCom = {
		getProvinces: function(obj) {
			/*获取查询全国所有的省份*/
			var el_obj = obj;
			ajaxFuncs.get({
				urlname: "/api/regions/provinces",
				funcs: {
					funcSuccessful: function(data) {
						var html = "";
						for(var i = 0; i < data.regionDtoList.length; i++) {
							html += '<option value="' + data.regionDtoList[i].id + '">' + data.regionDtoList[i].name + '</option>';
						}
						$(obj).empty().append(html);
					}
				}
			});
		},
		getCities: function(id, obj) {
			/*查询某个省下面的所有的市*/
			if(id != undefined && id != '') {
				ajaxFuncs.get({
					urlname: "/api/regions/cities/" + id,
					funcs: {
						funcSuccessful: function(data) {
							var html = "";
							for(var i = 0; i < data.regionDtoList.length; i++) {
								html += '<option value="' + data.regionDtoList[i].id + '">' + data.regionDtoList[i].name + '</option>';
							}
							$(obj).empty().append(html);
						}
					}
				});
			} else {
				common.toast("请先选择省");
			}
		},
		getAreas: function(id, obj) {
			/*查询某个市下面的所有的区/县*/
			if(id != undefined && id != '') {
				ajaxFuncs.get({
					urlname: "/api/regions/areas/" + id,
					funcs: {
						funcSuccessful: function(data) {
							var html = "";
							for(var i = 0; i < data.regionDtoList.length; i++) {
								html += '<option value="' + data.regionDtoList[i].id + '">' + data.regionDtoList[i].name + '</option>';
							}
							$(obj).empty().append(html);
						}
					}
				});
			} else {
				common.toast("请先选择市");
			}
		}
	};
	window.pageCom = pageCom;
})();