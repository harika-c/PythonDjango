import os ,datetime ,time, sys

def main():
    new_filename=sys.argv[1:]
    # dir_path=os.getcwd()+"\\"+os.listdir()[0]
    dir_path="D:/FilesWithDiffExtensions"

    # storing the dates and files
    dates, d = dateformat_intuple(dir_path)

    # sorting the files in the format yr :month: day: hr : min: sec
    sort_files_according_to_dates(dates)

    print(f"current directory{os.getcwd()}")

    # Print file names sorted based on last modified / create
    print_files_modifieddates(dates,d)

    print(".................below are the newly renamed files ....................")

    # rename files with their respective extensions
    rename_files_extensions(d,dates,new_filename)
    dates, d = dateformat_intuple(dir_path)

    print(f"current directory - {os.getcwd()}")

    # print the files
    print_files_modifieddates(dates, d)


def print_files_modifieddates(dates,d):
    i = 0
    for eachdate in dates:
        for file in d.keys():
            for dates2 in d[file].keys():
                if len(d.keys()) <= i:
                    pass
                elif d[file][dates2] == eachdate:
                    print(f'{file} : {dates2}')
                    i += 1
def dateformat_intuple(dir_path):
    os.chdir(dir_path)
    # print(os.getcwd())
    dates = []
    d = {}
    # get the format yr :month: day: hr : min: sec in a tuple
    for file in os.listdir():
        c = []
        a = time.strptime(time.ctime(os.path.getmtime(file)), "%c")
        c.append(a[0:6])
        d.update({file: {time.ctime(os.path.getmtime(file)): c}})
        dates.append([a[0:6]])
    dates.sort(key=lambda i: i[0], reverse=True)
    return dates,d
def sort_files_according_to_dates(dates):
    j = 0
    k = 0
    while len(dates) - 1 > j:
        m = 0
        while len(dates[j]) > m:
            if dates[k][m] == dates[k + 1][m]:
                m += 1
            elif dates[k][m] < dates[k + 1][m]:
                final_sort = dates[j:j + 2]
                final_sort.sort(key=lambda i: i[m], reverse=True)
                break
            else:
                k += 1
                break
        j += 1
def rename_files_extensions(d,dates,new_filename):
    i = 0
    ext = []
    for eachdate in dates:
        for file in d.keys():
            for dates2 in d[file].keys():
                if len(d.keys()) <= i:
                    pass
                elif d[file][dates2] == eachdate:
                    ext1 = file.split(".")
                    length = len(ext1)
                    ext22 = ext1[length - 1:length]
                    src = str(os.getcwd() + "\\" + file)
                    dest = str(os.getcwd() + "\\" + str(new_filename[0]) + str(i) + '.' + str(ext22[0]))
                    # print(src,dest)
                    os.rename(src, dest)
                    i += 1


if __name__=='__main__':
    main()
