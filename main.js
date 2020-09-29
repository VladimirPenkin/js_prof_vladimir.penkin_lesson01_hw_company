fetch('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2')
	.then(function (response) {
		console.log(response);
		return response.json();
	})
	.then(function (data) {
		console.log(data)

		function getTable(item) {

			let table = document.createElement("table");

			table.innerHTML +=
				`<tr><td>Company</td><td id="titleBalance">Balance</td><td>Registration</td>
				<td id="titleAddress">Address</td><td id="employers">Employers</td><td>Names</td></tr>`

			for (let i = 0; i < item.length; i++) {

				let addressArr = [];
				let employersArr = [];

				for (let key in item[i].address) {
					addressArr.push(item[i].address[key]);
				};

				for (let j = 0; j < item[i].employers.length; j++) {
					employersArr.push(item[i].employers[j].name);
				};

				let count = 0;
				for (let key in item[i].employers) {
					count++;
				}

				table.innerHTML +=
					`<tr><td>${item[i].company}</td><td>${item[i].balance}</td>
					 <td>${item[i].registered}</td><td id="address">${addressArr}</td><td>${count}</td><td>${employersArr}</td></tr>`
			};

			document.body.append(table);

			/*сортируем таблицу по балансу*/

			let titleBalance = document.getElementById("titleBalance");
			titleBalance.style.cursor = "pointer";

			titleBalance.addEventListener("click", function () {

				let sortedBalance = item.sort(function (a, b) {

					if (a["balance"] < b["balance"]) { return -1; }
					else if (a["balance"] < b["balance"]) { return 1; }
					return 0;
				});

				document.body.innerHTML = "";
				getTable(sortedBalance);

			});

			/*сортируем таблицу по количеству сотрудников*/

			let employers = document.getElementById("employers");
			employers.style.cursor = "pointer";

			employers.addEventListener("click", function () {

				let sortedEmployers = item.sort(function (a, b) {

					if (a["employers.length"] < b["employers.length"]) { return -1; }
					else if (a["employers.length"] < b["employers.length"]) { return 1; }
					return 0;
				});

				document.body.innerHTML = "";
				getTable(sortedEmployers);

			});

			/*объединение адреса*/

			let titleAddress = document.querySelector("#titleAddress");
			titleAddress.style.cursor = "pointer";

			titleAddress.addEventListener("click", function () {

				/*в процесс*/
				
			});

		};
		getTable(data);
	});