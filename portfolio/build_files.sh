echo "BUILD START"
python3.9 -m pip install
python3.9 manage.py collectstatic --noinput --clear
echo "BUILD END"