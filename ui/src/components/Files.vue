<template>
  <div>

    <div class="form-group mb-4">
      <label>Files</label>
      <b-form-file ref="images" @change="getFiles($event.target.files)" multiple size="md">
        <template slot="file-name">
        </template>
      </b-form-file>
    </div>
    
    <table class="table mt-3 filerows">
      <tbody>
        <template>
          <tr  v-for="(file, index) in allfiles" :key="index">
            <td>
              <b-link href="javascript:void(0)" @click="downloadFile(file.name, index)">{{file.name}}</b-link></td>
              <td>
                <b-link href="JavaScript:void(0);" @click="removeFile(index)"><i class="fa fa-times text-danger"></i></b-link>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <b-modal id="upload-files" centered hide-footer hide-header>
        <p class="text-center">File uploading...</p>
        <b-progress :value="progress_bar_value" :max="progress_bar_max" show-progress class="mb-3"></b-progress>
      </b-modal>
    </div>
  </template>
  <script>
  export default {
    name: 'FileUpload',
    components: {
    },
    data() {
      return {
        allfiles: [],
        progress_bar_value: 0,
        progress_bar_max: 0,
        crudId: this.$store.getters['crud/crudId']
      }
    },
    methods: {
      getFiles(files) {
        var newFileList = Array.from(files);
        newFileList.map((val) => {
          this.allfiles.push(val);
        })
      },

      async uploadFiles() {
        if(this.allfiles.length === 0) return;

        this.progress_bar_max = this.allfiles.length;
        this.$bvModal.show('upload-files');

        let queue = this.allfiles.map(async(item) => {
          let formData = new FormData();
          formData.append('file', item);
          formData.append('crud_id', this.crudId);

          await this.$store.dispatch('crud/uploadFiles',
            formData
            ).then(() => {
              this.progress_bar_value += 1;
            }).catch(error => {
              alert(error.message)
            });
          });

        await Promise.all(queue).then(() => {
          this.progress_bar_value = 0;
          this.$bvModal.hide('upload-files')
          this.allfiles = [];
          alert('Data saved successfully!')
        })
        return await true;
      },

      removeFile(index) {
        let newFileList = Array.from(this.allfiles);
        newFileList.splice(index , 1);
        this.allfiles = newFileList;
      },

      downloadFile(fileName, index) {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
          alert('The File APIs are not fully supported in this browser.');
          return;
        }
        let file = this.allfiles[index];
        const blob = new Blob([file], { type: file.type });
        const fileURL  = URL.createObjectURL(blob)
        window.open(fileURL);
      }

    }


  };
  </script>