exports.successResponse = function (res, msg) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.successResponseWithDataCreated = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(201).json(resData); 
};

exports.ErrorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.noContentAvailable = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(204).json(resData);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.validationError = function (res, msg) {
	var resData = {
		status: 0,
		message: msg
	};
	return res.status(400).json(resData);
};

exports.conflictData = function (res, msg) {
	var data = {
		status: 0,
		message: msg
	};
	return res.status(409).json(data);
}

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};


exports.forbiddenResponse = function (res, msg, data) {
	var data = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(403).json(data);
};