function doPost(e) {
	try {
		// Получаем данные из POST запроса
		const data = JSON.parse(e.postData.contents)

		// Логируем полученные данные
		console.log('Received data:', data)

		// ID вашей Google Таблицы (замените на ваш)
		const spreadsheetId = '1N_MvwIZ5q07d5n4zjOGupyWd7KVxSQ6xSSTKndsdYOw'
		const sheetName = 'Form Responses'

		console.log('Spreadsheet ID:', spreadsheetId)

		// Получаем активную таблицу
		const spreadsheet = SpreadsheetApp.openById(spreadsheetId)
		console.log('Spreadsheet opened successfully')

		const sheet = spreadsheet.getSheetByName(sheetName)
		console.log('Sheet found:', !!sheet)

		// Если лист не существует, создаем его
		if (!sheet) {
			const newSheet = spreadsheet.insertSheet(sheetName)
			// Добавляем заголовки
			newSheet
				.getRange(1, 1, 1, 8)
				.setValues([
					[
						'Timestamp',
						'First Name',
						'Last Name',
						'Mobile',
						'Email',
						'Role',
						'Comment',
						'Agreement',
					],
				])
			newSheet.getRange(1, 1, 1, 8).setFontWeight('bold')
		}

		// Подготавливаем данные для записи
		const timestamp = new Date().toISOString()
		const rowData = [
			timestamp,
			data.firstName || '',
			data.lastName || '',
			data.mobile || '',
			data.email || '',
			data.role || '',
			data.comment || '',
			data.agreement ? 'Yes' : 'No',
		]

		// Добавляем новую строку
		const targetSheet = spreadsheet.getSheetByName(sheetName)
		const lastRow = targetSheet.getLastRow()
		console.log('Last row before adding:', lastRow)
		console.log('Data to insert:', rowData)

		targetSheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData])
		console.log('Data inserted successfully')

		// Возвращаем успешный ответ с CORS заголовками
		return ContentService.createTextOutput(
			JSON.stringify({
				success: true,
				message: 'Data saved successfully',
			})
		)
			.setMimeType(ContentService.MimeType.JSON)
			.setHeader('Access-Control-Allow-Origin', '*')
			.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
			.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	} catch (error) {
		console.error('Error in doPost:', error)
		// Возвращаем ошибку с CORS заголовками
		return ContentService.createTextOutput(
			JSON.stringify({
				success: false,
				error: error.toString(),
			})
		)
			.setMimeType(ContentService.MimeType.JSON)
			.setHeader('Access-Control-Allow-Origin', '*')
			.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
			.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	}
}

function doOptions(e) {
	return ContentService.createTextOutput('')
		.setHeader('Access-Control-Allow-Origin', '*')
		.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
		.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function doGet(e) {
	return ContentService.createTextOutput(
		'Form handler is working!'
	).setMimeType(ContentService.MimeType.TEXT)
}
