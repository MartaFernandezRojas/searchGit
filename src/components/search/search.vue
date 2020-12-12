<!--search componenet-->
<template>
<div id="search">
    <div class="head">
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">Git Searcher</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="bar_search" :span="12" :offset="6">
                <el-input placeholder="Search Git repositories" prefix-icon="el-icon-search" v-model="search_input" @keyup.enter.native="searchValue()">
                </el-input>
            </el-col>
        </el-row>
    </div>
    <el-row>
        <el-col :span="22" :offset="1">
            <h3 class="subtitle">Results</h3>
            <el-table class="table" :data="resultsSearch" v-loading="loading">
                <el-table-column prop="name" label="Name" class="title">
                </el-table-column>
                <el-table-column prop="html_url" label="URL" class="title">
                    <template slot-scope="scope">
                        <a target="_blank" class="link" :href="scope.row.html_url">{{scope.row.html_url}}</a>
                    </template>
                </el-table-column>
                <el-table-column prop="score" label="Score" class="title" align="center">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<style src="./search.scss" lang="scss"></style>
<script src="./search.js"><script>
