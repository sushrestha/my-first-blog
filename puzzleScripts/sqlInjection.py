import re

def injection0(attempt):
	reg = re.compile("""^([a-z0-9]*|[=`~{}\[\]\|"!@#\$%\^&\*\(\)_\+<>\?:;,./\\-]*)*(')((?i)or)(([0-9]+=[0-9]+;?--.*$)|(("(.)*"=(('(.)*';?--.*$)|("(.)*";?--.*$)))|('(.)*'=(('(.)*';?--.*$)|("(.)*";?--.*$)))))""")
	math = re.compile("""^.+\d+=\d+\;?--.*$""")
	lastDitch = re.compile(""".*--.*$""")
	stripped = attempt.replace(' ', '')

	if re.match(reg, stripped):
		if "'='" in stripped:
			spot = stripped.find("'='")
			spot1 = stripped.rfind("'", 0, spot)
			spot2 = stripped.find("'", spot+3, len(stripped))
			var1 = stripped[spot1+1:spot]
			var2 = stripped[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"="' in stripped:
			spot = stripped.find('"="')
			spot1 = stripped.rfind('"', 0, spot)
			spot2 = stripped.find('"', spot+3, len(stripped))
			var1 = stripped[spot1+1:spot]
			var2 = stripped[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'=\""in stripped:
			spot = stripped.find("'=\"")
			spot1 = stripped.rfind("'", 0, spot)
			spot2 = stripped.find('"', spot+3, len(stripped))
			var1 = stripped[spot1+1:spot]
			var2 = stripped[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"=\'' in stripped:
			spot = stripped.find('"=\'')
			spot1 = stripped.rfind('"', 0, spot)
			spot2 = stripped.find("'", spot+3, len(stripped))
			var1 = stripped[spot1+1:spot]
			var2 = stripped[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif re.match(math, stripped):
			spot1 = stripped.rfind("'or")
			spot = stripped.find("=", spot1, len(stripped))
			spot2 = stripped.find(";", spot, len(stripped))
			try:
				var1 = int(stripped[spot1+3:spot])
				var2 = int(stripped[spot+1:spot2])
			except:
				return "SQL ERROR"
			if var1 != var2:
				return "Empty Set"
			return ""
		else:
			return "SQL ERROR"
	else:
		if re.match(lastDitch, stripped):
			return "SQL ERROR"
		return "Username password combination doesn't exist!"

def injection1(attempt):
	reg = re.compile("""^([a-z0-9]*|[=`~{}\[\]\|"!@#\$%\^&\*\(\)_\+<>\?:;,./\\-]*)*(')(?i)or\((((\d+=\d+\))|(((".*")|('.*'))=((".*")|('.*'))\)))|((\d+\)=\(\d+\))|((".*"\))|('.*'\)))=((\(".*"\))|(\('.*'\)))));?--.*$""")
	math = re.compile("""^.+\(((\d+=\d+\))|(\d+\)=\(\d+\)));?--.*$""")
	lastDitch = re.compile(""".*--.*$""")
	myFilter = [" "]
	specialCase = False

	attempt = webFilter(attempt, myFilter)
	if re.match(reg, attempt):
		if re.match(math, attempt):
			spot1 = attempt.rfind("'or")
			if(")=(" in attempt):
				spot = attempt.find("=", spot1, len(attempt))
				spot -= 1
				specialCase = True
			else:
				spot = attempt.find("=")
			spot2 = attempt.rfind(")", spot, len(attempt))
			try:
				var1 = int(attempt[spot1+4:spot])
				if specialCase:
					spot += 2
				var2 = int(attempt[spot+1:spot2])
			except:
				return "SQL ERROR"
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'='" in attempt or "')=('" in attempt:
			if "')=('" in attempt:
				spot = attempt.find("')=('")
				specialCase = True
			else:
				spot = attempt.find("'='")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"="' in attempt or '")=("' in attempt:
			if '")=("' in attempt:
				spot = attempt.find('")=("')
				specialCase = True
			else:
				spot = attempt.find('"="')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'=\""in attempt or "')=(\"" in attempt:
			if "')=(\"" in attempt:
				spot = attempt.find("')=(\"")
				specialCase = True
			else:
				spot = attempt.find("'=\"")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"=\'' in attempt or "\")=('" in attempt:
			if "\")=('" in attempt:
				spot = attempt.find("\")=('")
				specialCase = True
			else:
				spot = attempt.find('"=\'')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
	else:
		if re.match(lastDitch, attempt):
			return "SQL ERROR"
		return "Username password combination doesn't exist!"

# This one will introduce filtering the "or" keyword out and more and more eventually
def injection2(attempt):
	reg = re.compile("""^([a-z0-9]*|[=`~{}\[\]\|"!@#\$%\^&\*\(\)_\+<>\?:;,./\\-]*)*('(?i)\|\|\()(((\d+=\d+\))|(((".*")|('.*'))=((".*")|('.*'))\)))|((\d+\)=\(\d+\))|((".*"\))|('.*'\)))=((\(".*"\))|(\('.*'\)))));?--.*$""")
	math = re.compile("""^.+\(((\d+=\d+\))|(\d+\)=\(\d+\)));?--.*$""")
	lastDitch = re.compile(""".*--.*$""")
	myFilter = [" ", "or"]
	specialCase = False

	attempt = webFilter(attempt, myFilter)
	if re.match(reg, attempt):
		if re.match(math, attempt):
			spot1 = attempt.rfind("'||")
			if(")=(" in attempt):
				spot = attempt.find("=", spot1, len(attempt))
				spot -= 1
				specialCase = True
			else:
				spot = attempt.find("=")
			spot2 = attempt.rfind(")", spot, len(attempt))
			try:
				var1 = int(attempt[spot1+4:spot])
				if specialCase:
					spot += 2
				var2 = int(attempt[spot+1:spot2])
			except:
				return "SQL ERROR"
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'='" in attempt or "')=('" in attempt:
			if "')=('" in attempt:
				spot = attempt.find("')=('")
				specialCase = True
			else:
				spot = attempt.find("'='")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"="' in attempt or '")=("' in attempt:
			if '")=("' in attempt:
				spot = attempt.find('")=("')
				specialCase = True
			else:
				spot = attempt.find('"="')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'=\""in attempt or "')=(\"" in attempt:
			if "')=(\"" in attempt:
				spot = attempt.find("')=(\"")
				specialCase = True
			else:
				spot = attempt.find("'=\"")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"=\'' in attempt or "\")=('" in attempt:
			if "\")=('" in attempt:
				spot = attempt.find("\")=('")
				specialCase = True
			else:
				spot = attempt.find('"=\'')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
	else:
		if re.match(lastDitch, attempt):
			return "SQL ERROR"
		return "Username password combination doesn't exist!"

# This will introduce filtering all different type of "or" keywords, forcing for some union keywords or something else to work
# Answer will involve union, and also start filtering out comments to mess it all up
# NOT FINISHED YET
def injection3(attempt):
	reg = re.compile("""^([a-z0-9]*|[=`~{}\[\]\|"!@#\$%\^&\*\(\)_\+<>\?:;,./\\-]*)*(')(?i)\|\|\((((\d+=\d+\))|(((".*")|('.*'))=((".*")|('.*'))\)))|((\d+\)=\(\d+\))|((".*"\))|('.*'\)))=((\(".*"\))|(\('.*'\)))));?--.*$""")
	math = re.compile("""^.+\(((\d+=\d+\))|(\d+\)=\(\d+\)));?--.*$""")
	lastDitch = re.compile(""".*--.*$""")
	myFilter = [" ", "or", "||"]
	specialCase = False

	attempt = webFilter(attempt, myFilter)
	if re.match(reg, attempt):
		if re.match(math, attempt):
			spot1 = attempt.rfind("'||")
			if(")=(" in attempt):
				spot = attempt.find("=", spot1, len(attempt))
				spot -= 1
				specialCase = True
			else:
				spot = attempt.find("=")
			spot2 = attempt.rfind(")", spot, len(attempt))
			try:
				var1 = int(attempt[spot1+4:spot])
				if specialCase:
					spot += 2
				var2 = int(attempt[spot+1:spot2])
			except:
				return "SQL ERROR"
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'='" in attempt or "')=('" in attempt:
			if "')=('" in attempt:
				spot = attempt.find("')=('")
				specialCase = True
			else:
				spot = attempt.find("'='")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"="' in attempt or '")=("' in attempt:
			if '")=("' in attempt:
				spot = attempt.find('")=("')
				specialCase = True
			else:
				spot = attempt.find('"="')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif "'=\""in attempt or "')=(\"" in attempt:
			if "')=(\"" in attempt:
				spot = attempt.find("')=(\"")
				specialCase = True
			else:
				spot = attempt.find("'=\"")
			spot1 = attempt.rfind("'", 0, spot)
			spot2 = attempt.find('"', spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
		elif '"=\'' in attempt or "\")=('" in attempt:
			if "\")=('" in attempt:
				spot = attempt.find("\")=('")
				specialCase = True
			else:
				spot = attempt.find('"=\'')
			spot1 = attempt.rfind('"', 0, spot)
			spot2 = attempt.find("'", spot+3, len(attempt))
			if specialCase:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+5:spot2+2]
			else:
				var1 = attempt[spot1+1:spot]
				var2 = attempt[spot+3:spot2]
			if var1 != var2:
				return "Empty Set"
			return ""
	else:
		if re.match(lastDitch, attempt):
			return "SQL ERROR"
		return "Username password combination doesn't exist!"

# Make sure any "filtering" variables are lists so they are iterable
def webFilter(string, filtering):
	for i in filtering:
		string = string.replace(i, '')
	return string

#  For testing the methods without having to start up server
if __name__ == '__main__':
	injection0Test = """--' or 1=1;--"""
	print(injection0("%s" % (injection0Test)))
	injection1Test = """'or("1")=('1');--"""
	print(injection1("%s" % (injection1Test)))
	injection2Test = """'||("1")=('1');--"""
	print(injection2("%s" %(injection2Test)))