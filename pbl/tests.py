from django.test import TestCase
from pbl.models import Level

# Create your tests here.
class LevelTests(TestCase):
	"""Level models test"""
	def test_str(self):
		level = Level(title='Level 01')
		self.assertEquals(str(level),'Level 01',)


