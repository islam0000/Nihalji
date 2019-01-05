using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObjects
{
    public class Registration
    {
		private string fistName;
		private string lastName;
		private string email;
		private string passsword;

		public Registration(string fistName, string lastName, string email, string passsword)
		{
			this.fistName = fistName;
			this.lastName = lastName;
			this.email = email;
			this.passsword = passsword;
		}
	}
}
