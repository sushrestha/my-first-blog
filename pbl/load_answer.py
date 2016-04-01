# python code to read the file
import os

def load_file(rnd):
	currentdir = os.getcwd()
	path_files = currentdir
	filename = "answer_0"+rnd+".txt"
	infile = path_files+'\\'+filename
	print infile
	answer_dict = {}
	try:
		inputfile = open(infile,'r')
		# index = 0
		for index,line in enumerate(inputfile):
			terms = line.split()
			print terms
			# answer_dict['field'+str(index)] = terms
			answer_dict[index] = terms
			# index = index + 1
		inputfile.close()
	except IOError as err:
		print err
	print answer_dict


if __name__=="__main__":
	load_file('0')